export const SALES_EMAIL = "sales@stashleading.com";

type FormSubmitValue = string | number | undefined | null;

interface SubmitToFormSubmitOptions {
  subject: string;
  fields: Record<string, FormSubmitValue>;
  recipient?: string;
  replyTo?: string;
  target?: "_blank" | "_self";
  template?: "table" | "box";
}

export function submitToFormSubmit({
  subject,
  fields,
  recipient = SALES_EMAIL,
  replyTo,
  target = "_blank",
  template = "table",
}: SubmitToFormSubmitOptions) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = `https://formsubmit.co/${recipient}`;
  form.target = target;
  form.style.display = "none";

  const payload: Record<string, FormSubmitValue> = {
    _subject: subject,
    _captcha: "false",
    _template: template,
    _url: window.location.href,
    ...(replyTo ? { _replyto: replyTo } : {}),
    ...fields,
  };

  Object.entries(payload).forEach(([name, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = String(value);
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  window.setTimeout(() => form.remove(), 0);
}
