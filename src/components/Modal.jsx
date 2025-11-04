import { useEffect } from "react";

export default function Modal({ onClose, title, children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close" onClick={onClose}>
          ❌
        </div>
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
