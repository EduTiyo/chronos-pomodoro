import { Slide, ToastContainer } from "react-toastify";

interface MessagesContainerProps {
  children: React.ReactNode;
}

const MessagesContainer = ({ children }: MessagesContainerProps) => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      {children}
    </>
  );
};

export default MessagesContainer;
