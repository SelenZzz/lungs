import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

type Lang = string;
type LangKey = string;
declare const numericKeys: readonly ["1", "2", "5"];
type NumericKey = (typeof numericKeys)[number];
type NumericLangKeyTranslation = Record<NumericKey, Lang>;
type LangKeyTranslation = Lang | NumericLangKeyTranslation;
type DateLangKeyTranslation = Lang;
declare const monthKeys: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
type MonthKey = (typeof monthKeys)[number];
type MonthLangKeyTranslation = Record<MonthKey, Lang>;
declare const relativeDateKeys: readonly ["just", "seconds", "minute", "minutes", "hour", "hours", "yesterday", "more"];
type RelativeDateKey = (typeof relativeDateKeys)[number];
type RelativeDateLangKeyTranslation = Record<RelativeDateKey, LangKeyTranslation>;
type LangPack = {
    lang: string;
    hash: string;
    commons: {
        [P in LangKey]: LangKeyTranslation;
    };
    months: {
        [P in LangKey]: MonthLangKeyTranslation;
    };
    dates: {
        [P in LangKey]: DateLangKeyTranslation;
    };
    relativeDates: {
        [P in LangKey]: RelativeDateLangKeyTranslation;
    };
};

interface UseDateParams {
    unixtime: number | undefined;
    dateLangKey: LangKey;
    monthsLangKey: LangKey;
    relativeFromDay?: number;
    relativeLangKey?: LangKey;
}
declare const useClientDate: (props: UseDateParams) => string;

interface LangProviderProps {
    children: ReactNode;
    targetHash?: string;
    onNeedLoad?: () => void;
}
declare const LangsProvider: ({ children, targetHash, onNeedLoad }: LangProviderProps) => react_jsx_runtime.JSX.Element;

declare const setTargetLangPackHash: (hash: string) => void;
declare const getLangPack: () => LangPack | null;
declare const setLangPack: (newLangPack: LangPack | null) => void;
declare const initLangPack: (onNeedLoad?: () => void) => void;

declare const getLang: (key: LangKey, vars?: Record<string, string | number>, count?: number) => string;
declare const getLangDate: (unixtime: number, dateLangKey: LangKey, monthsLangKey: LangKey, relativeFromDay?: number, relativeLangKey?: LangKey) => string;

export { DateLangKeyTranslation, Lang, LangKey, LangKeyTranslation, LangPack, LangsProvider, MonthKey, MonthLangKeyTranslation, NumericKey, NumericLangKeyTranslation, RelativeDateKey, RelativeDateLangKeyTranslation, getLang, getLangDate, getLangPack, initLangPack, monthKeys, setLangPack, setTargetLangPackHash, useClientDate };
