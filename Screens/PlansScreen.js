import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const PlansScreen = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePackageSelection = (packageType) => {
    setSelectedPackage(packageType);
    setShowPaymentModal(true);
  };

  const handlePayment = () => {
    // Implement PayPal payment logic here
    // Redirect user to PayPal payment page
    // Use selectedPackage to determine the amount to be paid
    // Once payment is completed, close the modal
    setShowPaymentModal(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Select Your Plan:</Text>
      <TouchableOpacity onPress={() => handlePackageSelection('Silver')} style={styles.packageButton}>
        <Text>Silver Package ($50)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePackageSelection('Gold')} style={styles.packageButton}>
        <Text>Gold Package ($75)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePackageSelection('Platinum')} style={styles.packageButton}>
        <Text>Platinum Package ($100)</Text>
      </TouchableOpacity>

      <Modal
        visible={showPaymentModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowPaymentModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Confirm Payment</Text>
            <Text style={styles.modalText}>Amount: {selectedPackage ? `$${getPackagePrice(selectedPackage)}` : ''}</Text>
            <TouchableOpacity onPress={handlePayment} style={styles.payButton}>
              <Text style={styles.payButtonText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const getPackagePrice = (packageType) => {
  switch (packageType) {
    case 'Silver':
      return 50;
    case 'Gold':
      return 75;
    case 'Platinum':
      return 100;
    default:
      return 0;
  }
};

const styles = {
  packageButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
  },
};

export default PlansScreen;
