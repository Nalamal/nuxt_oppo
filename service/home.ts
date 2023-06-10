import myRequest from "./index";
import type { IResultData } from "./index";
import type { IHomeState } from "~/store/home";

export type IHomeInfoType = "oppo" | "onePlus" | "intelligent"; // oppo onePlus intelligent

export const getHomeInfo = (type: IHomeInfoType) => {
  return myRequest.get<IResultData<IHomeState>>("/home/info", {
    type: type || "oppo",
  });
};
