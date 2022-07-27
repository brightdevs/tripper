import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

/*
rename useSelector as _useSelector
or export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
*/
