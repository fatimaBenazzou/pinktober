export default function CollectionShipmentTable({ shipments }: { shipments: ShipmentI[] }) {
	return (
		<div className="overflow-x-auto border rounded-lg">
			<table className="table w-full">
				<thead>
					<tr>
						<th>Shipment</th>
						<th>Client</th>
						<th>Delivery Price</th>
						<th>Product Price</th>
						<th>Total Price</th>
					</tr>
				</thead>
				<tbody>
					{shipments.map((shipment) => (
						<tr key={shipment._id}>
							<td>
								<a href={`/app/shipments/${shipment._id}`} target="_blank" rel="noreferrer">
									{shipment._id}
								</a>
							</td>
							<td>
								<a
									href={`/app/clients/${
										typeof shipment.createdFor === "string"
											? (shipment.createdFor as unknown as string)
											: shipment.createdFor._id
									}`}
									target="_blank"
									rel="noreferrer"
								>
									{typeof shipment.createdFor === "string"
										? (shipment.createdFor as unknown as string)
										: shipment.createdFor.firstName + " " + shipment.createdFor.lastName}
								</a>
							</td>
							<td>{shipment.pricing.delivery}</td>
							<td>{shipment.pricing.product}</td>
							<td>{shipment.pricing.delivery + shipment.pricing.product}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
