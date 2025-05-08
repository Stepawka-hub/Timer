import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "@store";
import { useMemo } from "react";
import { rootActions } from "@actions/root-actions";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
