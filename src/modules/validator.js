const validator = () => {
  document.addEventListener("input", (e) => {
    const target = e.target;

    if (target.tagName !== "INPUT") return;

    if (
      target.classList.contains("calc-square") ||
      target.classList.contains("calc-count") ||
      target.classList.contains("calc-day")
    ) {
      target.value = target.value.replace(/\D/g, "");
      return;
    }

    if (target.type === "text") {
      target.value = target.value.replace(/[^А-Яа-яЁё\s-]/g, "");
    }

    if (target.type === "email") {
      target.value = target.value.replace(/[^a-zA-Z0-9@\-_\.!~*']/g, "");
    }

    if (target.type === "tel") {
      target.value = target.value.replace(/[^0-9()-]/g, "");
    }
  });
};

export default validator;
