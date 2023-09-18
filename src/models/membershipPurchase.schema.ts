import mongoose from 'mongoose';

const membershipPurchaseSchema = new mongoose.Schema({
  memberID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  membershipID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Membership',
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  // Add any additional fields as needed
});

const MembershipPurchase = mongoose.model('MembershipPurchase', membershipPurchaseSchema);

module.exports = MembershipPurchase;