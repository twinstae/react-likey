import React from "react";
import toast from "react-hot-toast";

interface ClipBoardToastProps {
  visible: boolean;
  clipBoardText: string;
  open: (newLink: string) => void;
}

function ClipBoardToast({ visible, clipBoardText, open }: ClipBoardToastProps) {
  return (
    <div
      className={`${
        visible ? "animate-enter" : "animate-leave"
      } mb-20  max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="w-60 ml-3">
            <p className="line-clamp-1 text-sm font-medium text-gray-900">
              클립보드에 링크복사가 있습니다.
            </p>
            <p className="line-clamp-1 mt-1 text-sm text-gray-500">
              {clipBoardText}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => {
            toast.dismiss();
            navigator.clipboard.readText().then(open);
          }}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          붙여넣기
        </button>
      </div>
    </div>
  );
}

export default ClipBoardToast;
