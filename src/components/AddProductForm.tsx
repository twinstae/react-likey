import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
// import { useHistory } from 'react-router-dom';
import { useBottomSheetAtom } from "../state/bottomSheetAtomState";
import productListAtom, { useProductListAtom } from "../state/productListState";
import { getProductFromOGUrl } from "../api";

import uuid from "../uuid";
import { useCategoryAtom } from "../state/categoryState";

interface inputWithLabelProps {
  id: string;
  text: string;
  registerInput: unknown;
  isError?: boolean;
  type: "number" | "text" | "url" | "select";
}
//https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=125174961

function InputWithLabel({
  id,
  text,
  registerInput,
  type,
  isError,
}: inputWithLabelProps) {
  return (
    <label htmlFor={id} className="text-lg font-semibold">
      {text}
      <input
        className={
          "text-base font-normal transition-colors duration-500 border-b-2 border-gray-300 w-full text-gray-800 leading-normal shadow-none outline-none focus:outline-none focus:ring-0 focus:text-gray-800 focus:border-indigo-300 px-0 mb-2 bg-transparent invalid:border-red-400" +
          (isError === true ? "border-red-400" : "")
        }
        id={id}
        type={type}
        {...registerInput}
      />
    </label>
  );
}

export default function AddProductForm({ dismiss }: { dismiss: () => void }) {
  /*
    이미지 링크 (수정 불가)
    상품 링크 (수정 불가)
    상품 이름 (required)
    가격과 단위 (required)
    카테고리 선택 (전체가 기본)
    */

  const defaultValues = {
    product: {
      id: uuid(),
      imageLink: "",
      productLink: "",
      productName: "",
      priceWon: 0,
      category: "전체",
    },
  };
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const { productLink } = useBottomSheetAtom();

  useEffect(() => {
    if (productLink) {
      setValue("product.productLink", productLink, { shouldValidate: true });

      getProductFromOGUrl(productLink) // {title: "..."}
        .then(({ title, image }) => {
          setValue("product.productName", title, { shouldValidate: true });
          setValue("product.imageLink", image, { shouldValidate: true });
        });
    }
  }, [productLink]);

  const { addProduct } = useProductListAtom(productListAtom);

  // const history = useHistory();
  const onSubmit = (data: { product: ProductT }) => {
    addProduct(data.product);
    reset(defaultValues);
    dismiss();
  };

  const imageLink = watch("product.imageLink");

  const { categoryList } = useCategoryAtom();

  return (
    <div data-testid="add-product-page">
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        {imageLink && <img className="h-32" src={imageLink} />}
        <InputWithLabel
          id="image-link-input"
          text="이미지 링크"
          type="url"
          registerInput={register("product.imageLink")}
        />
        <InputWithLabel
          id="product-link-input"
          text="상품 링크"
          type="url"
          registerInput={register("product.productLink", {
            required: true,
            onChange: (e) => {
              setValue("product.productLink", e.target.value, {
                shouldValidate: true,
              });
            },
          })}
          isError={errors.product?.productLink?.type === "validUrl"}
        />
        {errors.product?.productLink?.type === "validUrl" ? (
          <span className="text-red-400">
            올바른 url 형식이 아닙니다
            <br />
          </span>
        ) : undefined}
        <InputWithLabel
          id="product-name-input"
          text="상품 이름"
          type="text"
          registerInput={register("product.productName", { required: true })}
        />
        <InputWithLabel
          id="price-won-input"
          text="가격(원)"
          type="number"
          registerInput={register("product.priceWon", {
            required: true,
            valueAsNumber: true,
          })}
        />
        <label htmlFor="category-input" className="text-lg font-semibold">
          카테고리
          <select
            className="text-base font-normal transition-colors duration-500 border-b-2 border-gray-300 w-full text-gray-800 leading-normal shadow-none outline-none focus:outline-none focus:ring-0 focus:text-gray-800 focus:border-indigo-300 px-0 mb-2 bg-transparent invalid:border-red-400"
            id="category-input"
            {...register("product.category")}
          >
            {categoryList.map((name) => (
              <option value={name}>{name}</option>
            ))}
          </select>
        </label>

        <button
          id="add-product-button"
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          상품 추가
        </button>
      </form>
    </div>
  );
}
