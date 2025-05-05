import { useCallback, useState } from "react";
import { TRecord } from "src/types/types";

export const useRecords = (initialValue = [], max = 15) => {
  const [records, setRecords] = useState<TRecord[]>(initialValue);

  const addRecord = useCallback((time: number) => {
    setRecords((r) => {
      const records = r.length >= max ? r.slice(1) : r;
      const newRecord = { position: records.length + 1, time };

      return [...records, newRecord].map((e, i) => ({ ...e, position: i + 1 }));
    });
  }, [max]);

  const clearList = useCallback(() => {
    setRecords([]);
  }, []);

  return { records, addRecord, clearList };
};
