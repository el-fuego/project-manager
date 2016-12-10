import React, { PureComponent, PropTypes } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default class Project extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.node.isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
  };

  render() {
    const { isOpen, onSave, onClose, children, title } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={onClose}>
        <ModalHeader toggle={onClose}>
          {title}
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSave}>
            Save
          </Button>
          {' '}
          <Button color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
