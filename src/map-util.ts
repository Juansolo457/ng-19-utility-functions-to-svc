export const mapDictionaryToSelectOptions = <Value extends string | number | symbol>(
    dictionary: Map<Value, string>,
  ): { value: Value; label: string }[] => {
    return Array.from(dictionary, ([value, label]) => ({
      value: value as Value,
      label: label as string,
    }));
  };

  