import { Request } from "express";
import { IAnyObject, IHasuraActionPayload } from "../shared/types";

export type ActionPayload = IHasuraActionPayload;

export type ActionHandler<P extends IHasuraActionPayload, R = IAnyObject> =
  (req: Request, payload: P) => Promise<R>;

export type IActionHandlerMap = {
  readonly [key: string]: ActionHandler<ActionPayload>
};
