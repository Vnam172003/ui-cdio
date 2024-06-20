import { useQuery } from "@tanstack/react-query";
import { Category } from "../Api/Api.product";

const useAllCategory = () => {
  return useQuery({
    queryKey: ["Category"],
    queryFn: () => {
      return Category();
    },
  })?.data?.data;
};
export default useAllCategory;
