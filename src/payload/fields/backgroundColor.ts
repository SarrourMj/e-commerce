import { Field } from 'payload/types';

export type Type = 'purple' | 'yellow' | 'none' | 'black';

const backgroundColor: Field = {
  name: 'backgroundColor',
  type: 'radio',
  label: 'Background Color',
  defaultValue: 'none',
  admin: {
    layout: 'horizontal',
  },
  options: [
    {
      label: 'None',
      value: 'none',
    },
    {
      label: 'Yellow',
      value: 'yellow',
    },
    {
      label: 'Black',
      value: 'black',
    },
    {
      label: 'Purple',
      value: 'purple',
    },
  ],
};

export default backgroundColor;
