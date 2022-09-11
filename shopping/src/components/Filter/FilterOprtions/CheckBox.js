import React from 'react';
import { Box, Check, Horizontal, Name } from './CheckBox.Styles';

export default function CheckBox() {
  return (
    <form>
      <Horizontal />
      <Check>
        <Box type="checkbox" value="in-Stock" />
        <Name>in-Stock</Name>
      </Check>
      <Check>
        <Box type="checkbox" value="delivery" />
        <Name>delivery</Name>
      </Check>
    </form>
  );
}
