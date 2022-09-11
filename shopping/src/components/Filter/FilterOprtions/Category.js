import React from 'react';
import { Wrapper, Card, CardBody, Reset } from './Category.Styles';

export default function Category() {
  return (
    <Wrapper>
      <CardBody type="button">
        <Card>
          <img
            src="https://mechanicalkeyboards.com/shop/images/products/thumb_9073_thumb_A1A029A01A02645M_main.jpg"
            alt=""
            height="80"
          />
        </Card>
      </CardBody>

      <CardBody type="button">
        <Card>
          <img
            src="https://mechanicalkeyboards.com/shop/images/products/thumb_category_mandd.jpg"
            alt=""
            height="80"
          />
        </Card>
      </CardBody>
    </Wrapper>
  );
}
