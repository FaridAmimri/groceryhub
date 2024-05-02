-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" DECIMAL(65,30) NOT NULL,
    "products" JSONB[],
    "status" TEXT NOT NULL,
    "intent_id" TEXT,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_intent_id_key" ON "Order"("intent_id");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
