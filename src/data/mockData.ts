import { TransactionCategory, PaymentMethod, TransactionType } from "../shared/enums/Transaction";

export const TRACKER = [
    {
        id: "8uhgh3",
        name: "June monthly tracker",
        templateId: "989ij",
        createdAt: "2024-06-01T12:00:00",
        description: "This tracker is for managing expenses and investments for June.",
        segments: [
            {
                id: "8uhgsdiw",
                name: "Groceries",
                description: "Expenses related to groceries and household essentials.",
                allocatedAmount: 30000,
                amount: 20000,
            },
            {
                id: "iujkl",
                name: "Entertainment",
                description: "Expenses related to entertainment and leisure activities.",
                allocatedAmount: 15000,
                amount: 7000,
            },
            {
                id: "iuhjk",
                name: "Investments",
                description: "Income from investments such as stocks, bonds, etc.",
                allocatedAmount: 30000,
                amount: 20000,
            }
        ],
        transactions: [
            {
                id: "txn1",
                createdAt: "2024-06-05T08:00:00",
                amount: 5000,
                description: "Groceries",
                category: TransactionCategory.GROCERIES,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "8uhgsdiw",
            },
            {
                id: "txn2",
                createdAt: "2024-06-10T10:00:00",
                amount: 5000,
                description: "Rent",
                category: TransactionCategory.FUEL,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "8uhgsdiw",
            },
            {
                id: "txn3",
                createdAt: "2024-06-08T14:00:00",
                amount: 3000,
                description: "Dining out",
                category: TransactionCategory.FOOD,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "iujkl",
            },
            {
                id: "txn4",
                createdAt: "2024-06-12T16:00:00",
                amount: 5000,
                description: "Concert tickets",
                category: TransactionCategory.ENTERTAINMENT,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "iujkl",
            },
            {
                id: "txn5",
                createdAt: "2024-06-15T09:00:00",
                amount: 10000,
                description: "Stock investment",
                category: TransactionCategory.INVESTMENTS,
                type: TransactionType.INCOME,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "iuhjk",
            },
            {
                id: "txn6",
                createdAt: "2024-06-20T11:00:00",
                amount: 2000,
                description: "Groceries",
                category: TransactionCategory.GROCERIES,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.BANK_TRANSFER,
                segmentId: "8uhgsdiw",
            },
            {
                id: "txn7",
                createdAt: "2024-06-25T13:00:00",
                amount: 8000,
                description: "Movie tickets",
                category: TransactionCategory.ENTERTAINMENT,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "iujkl",
            },
            {
                id: "txn8",
                createdAt: "2024-06-28T15:00:00",
                amount: 6000,
                description: "Fuel",
                category: TransactionCategory.FUEL,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "8uhgsdiw",
            }
        ]
    },
    {
        id: "9kfj3l",
        name: "July monthly tracker",
        templateId: "234fd",
        createdAt: "2024-07-01T12:00:00",
        description: "This tracker is for managing expenses and investments for July.",
        segments: [
            {
                id: "9kfj4l",
                name: "Utilities",
                description: "Expenses related to utilities like electricity, water, etc.",
                allocatedAmount: 32000,
                amount: 18000,
            },
            {
                id: "dfg234",
                name: "Shopping",
                description: "Expenses related to shopping for goods and personal items.",
                allocatedAmount: 16000,
                amount: 5000,
            },
            {
                id: "jkl3er",
                name: "Investments",
                description: "Income from investments such as mutual funds, stocks, etc.",
                allocatedAmount: 35000,
                amount: 25000,
            },
            {
                id: "erj342",
                name: "Savings",
                description: "Savings and contributions towards emergency funds, retirement savings, etc.",
                allocatedAmount: 10000,
                amount: 8000,
            }
        ],
        transactions: [
            {
                id: "txn9",
                createdAt: "2024-07-05T08:00:00",
                amount: 7000,
                description: "Utilities",
                category: TransactionCategory.UTILITIES,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "9kfj4l",
            },
            {
                id: "txn10",
                createdAt: "2024-07-10T10:00:00",
                amount: 6000,
                description: "Groceries",
                category: TransactionCategory.GROCERIES,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "8uhgsdiw",
            },
            {
                id: "txn11",
                createdAt: "2024-07-15T14:00:00",
                amount: 4000,
                description: "Clothing",
                category: TransactionCategory.SHOPPING,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.BANK_TRANSFER,
                segmentId: "dfg234",
            },
            {
                id: "txn12",
                createdAt: "2024-07-20T16:00:00",
                amount: 8000,
                description: "Movie tickets",
                category: TransactionCategory.ENTERTAINMENT,
                type: TransactionType.EXPENSE,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "iujkl",
            },
            {
                id: "txn13",
                createdAt: "2024-07-25T09:00:00",
                amount: 10000,
                description: "Mutual funds",
                category: TransactionCategory.INVESTMENTS,
                type: TransactionType.INCOME,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "jkl3er",
            },
            {
                id: "txn14",
                createdAt: "2024-07-30T11:00:00",
                amount: 2000,
                description: "Emergency fund",
                category: TransactionCategory.SAVINGS,
                type: TransactionType.INCOME,
                paymentMethod: PaymentMethod.CASH,
                segmentId: "erj342",
            }
        ]
    },
];
