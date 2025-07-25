export default function formatDate(date: any) {
  let d;
  if (date instanceof Date) {
    d = date;
  } else if (date && typeof date.toDate === "function") {
    d = date.toDate();
  } else {
    d = new Date(date);
  }
  const dia = String(d.getDate()).padStart(2, "0");
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const ano = d.getFullYear();
  const hora = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${dia}/${mes}/${ano} - ${hora}:${min}`;
}
