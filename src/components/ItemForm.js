import { connect } from 'react-redux';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { CATEGORIES, DEFAULT_CATEGORY } from '../constants';

import { closeModal, addItem, editItem, removeItem } from '../actions';
import Button from './Button';
import Title from './Title';
import Section from './Section';
import Input from './Input';
import Select from './Select';
import { capitalize } from '../helpers/formatting';
import { MAN, WOMAN, SHARED, INCOME } from '../constants';

const ItemForm = ({ invalid, handleSubmit, title, onCancel, onSubmit, onRemove, editMode }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Title>{title}</Title>
    <Section>
      <Field name="title" component={Input} type="text" label="Titel"/>
    </Section>
    <Section>
      <Field name="amount" component={Input} type="number" step="0.01" label="Bedrag"/>
    </Section>
    <Section size="md">
      <Field
        name="category"
        component={Select}
        label="Categorie"
      >
        {CATEGORIES.map(({ id, name }) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </Field>
    </Section>
    <Section>
      <ButtonPair>
        <ButtonPairButton>
          <Button disabled={invalid}>Opslaan</Button>
        </ButtonPairButton>
        <ButtonPairButton>
          <Button onClick={onCancel} type="button" warning>Annuleren</Button>
        </ButtonPairButton>
      </ButtonPair>
    </Section>
    {editMode && <Button onClick={onRemove} type="button" danger>Verwijderen</Button>}
  </form>
);

ItemForm.propTypes = {
  invalid: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired
};

const ButtonPair = styled.div`
  display: flex;
`;

const ButtonPairButton = styled.div`
  flex-grow: 1;
  margin-right: 1.6rem;

  &:last-child {
    margin-right: 0;
  }
`;

function mapStateToProps(state) {
  const { responsible, itemType, id } = state.modal;
  const title = capitalize(
    (responsible === SHARED ? 'gezamelijke ' : '') +
    (itemType === INCOME ? 'inkomst ' : 'uitgave ') +
    (responsible === MAN ? 'voor Niels ' : '') +
    (responsible === WOMAN ? 'voor Peggy ' : '') +
    (id ? 'bewerken' : 'toevoegen')
  );

  return { title, modal: state.modal, editMode: Boolean(id) };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { editMode, modal } = stateProps;
  const { responsible, itemType, id } = modal;

  return {
    title: stateProps.title,
    onCancel: dispatchProps.closeModal,
    editMode,
    ...ownProps,
    onSubmit({ title, amount, category }) {
      const item = { id, itemType, responsible, title, amount: Number(amount), category };
      const action = editMode ? dispatchProps.editItem : dispatchProps.addItem;

      action(item);
      dispatchProps.closeModal();
    },
    onRemove() {
      dispatchProps.removeItem(id);
      dispatchProps.closeModal();
    }
  };
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = 'Vul een titel in van minimaal 3 karakters';
  }

  if (isNaN(Number(values.amount))) {
    errors.amount = 'Vul een geldig bedrag in';
  }

  return errors;
}

export default connect(mapStateToProps, { closeModal, addItem, editItem, removeItem }, mergeProps)(
  reduxForm({
    form: 'item',
    initialValues: {
      category: DEFAULT_CATEGORY
    },
    validate
  })(ItemForm)
);
