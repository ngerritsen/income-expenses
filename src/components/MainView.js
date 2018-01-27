import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MAN, WOMAN, SHARED } from '../constants';
import Sheet from './Sheet';
import Modal from './Modal';
import ItemForm from './ItemForm';

const MainView = ({ isModalOpen }) => (
  <div>
    <Sheet responsible={MAN} title="Niels"/>
    <Sheet responsible={WOMAN} title="Peggy"/>
    <Sheet responsible={SHARED} title="Gezamelijk"/>

    <Modal isOpen={isModalOpen}>
      <ItemForm/>
    </Modal>
  </div>
);

MainView.propTypes = {
  isModalOpen: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isModalOpen: state.modal.isOpen
  };
}

export default connect(mapStateToProps)(MainView);
