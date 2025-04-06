import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className="fixed top-0 right-0 w-full h-full backdrop-blur-xs flex justify-center items-center z-100"
    >
      <section
        onClick={e => e.stopPropagation()}
        className="relative bg-white dark:bg-neutral-700 text-black dark:text-neutral-50 rounded-2xl border border-gray-200 dark:border-gray-500 shadow-lg p-4 max-w-9/10 "
      >
        {children}
      </section>
    </div>,
    document.getElementById('pokemon-modal-root')
  );
};

export default Modal;
