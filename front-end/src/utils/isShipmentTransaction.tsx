export const isShipmentTransaction = (transaction: TransactionsI): transaction is ShipmentTransactionI => {
	return transaction.kind === "Package";
};
