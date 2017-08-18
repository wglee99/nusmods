// @flow
import FilterGroup from 'utils/filters/FilterGroup';

/* components/ModulesSelect.jsx */
export type SelectOption = { label: string, value: string };

/* settings/SettingsContainer.jsx */
export type Theme = {
  id: string,
  name: string,
};

/* browse/ModuleFinderContainer */
export type OnFilterChange = FilterGroup<*> => void;
