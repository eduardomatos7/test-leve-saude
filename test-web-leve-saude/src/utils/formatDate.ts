import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (dateValue: Date | { toDate: () => Date }) => {
  const date = "toDate" in dateValue ? dateValue.toDate() : dateValue;
  return format(date, "dd 'de' MMMM 'de' yyyy, HH:mm", { locale: ptBR });
};
