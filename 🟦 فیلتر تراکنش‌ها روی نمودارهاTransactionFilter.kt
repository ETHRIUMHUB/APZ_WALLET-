@Composable
fun TransactionFilter(
    selectedType: String,
    onTypeSelected: (String) -> Unit
) {
    val types = listOf("ALL", "TRANSFER", "MINT", "BURN")

    Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
        types.forEach { type ->
            Button(
                onClick = { onTypeSelected(type) },
                colors = if (selectedType == type)
                    ButtonDefaults.buttonColors(containerColor = Color.Blue)
                else ButtonDefaults.buttonColors(containerColor = Color.Gray)
            ) {
                Text(type)
            }
        }
    }
}
