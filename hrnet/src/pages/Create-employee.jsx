import { MainLayout } from '../components/MainLayout/MainLayout';
import { Form } from '../components/Form/Form';
import { Modal } from '../components/Modal/Modal';
import { useState } from 'react';

const textInputs = ['First Name', 'Last Name'];
const dateInputs = ['Date of Birth', 'Start Date'];
const adressInputs = ['Street', 'City'];

export function CreateEmployee() {
  const [isModal, setModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <>
      {isModal ? (
        <MainLayout viewEmployees={false}>
          <Modal />
          <Form
            textInputs={textInputs}
            dateInputs={dateInputs}
            adressInputs={adressInputs}
            handleSubmit={handleSubmit}
          />
        </MainLayout>
      ) : (
        <MainLayout viewEmployees={false}>
          <Form
            textInputs={textInputs}
            dateInputs={dateInputs}
            adressInputs={adressInputs}
            handleSubmit={handleSubmit}
          />
        </MainLayout>
      )}
    </>
  );
}
