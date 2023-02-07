export interface searchBarPropsType {
  setSearchWord: (value: string) => void;
}
export interface selectPropsType {
  setSelected: (value: { name: string }) => void;
  selected: { name: string };
}
