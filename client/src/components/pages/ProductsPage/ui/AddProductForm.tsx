import React, { memo, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import type { FormProductType } from '../../../../types/product';
import { useProductsHandlersDispatchContext } from '../../../../contexts/productsReducer/contexts';

function AddProductForm(): JSX.Element {
  const [formData, setFormData] = useState<FormProductType>({
    title: '',
    description: '',
    price: '',
    img: null,
  });
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.files) return;
    if (!event.target.files[0]) return;
    setFormData((prev) => ({
      ...prev,
      img: event.target.files![0],
    }));
  };

  // const { addProductHandler } = useContext(ProductContext);

  // const { addProductHandler } = useProductHandlersContext();

  const { addProductHandler } = useProductsHandlersDispatchContext();

  // const addProductHandler = store?.addProductHandler;

  // console.log(formData);
  // console.log('form render');
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        void addProductHandler(formData);
        // e.currentTarget.reset();
      }}
    >
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          onChange={changeHandler}
          name="title"
          value={formData.title}
          placeholder="Product title"
          aria-label="Product title"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="img-file">Choose file</Form.Label>
        <Form.Control type="file" id="img-file" name="img" onChange={handleFileChange} />
      </Form.Group>

      <InputGroup className="mb-3">
        <InputGroup.Text>EUR</InputGroup.Text>
        <Form.Control
          onChange={changeHandler}
          name="price"
          value={formData.price}
          aria-label="Price (to the nearest euro)"
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control
          onChange={changeHandler}
          name="description"
          value={formData.description}
          as="textarea"
          aria-label="Product description"
        />
      </InputGroup>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default memo(AddProductForm);
