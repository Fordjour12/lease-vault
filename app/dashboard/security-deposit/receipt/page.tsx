import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DashboardHeader } from "@/components/dashboard-header"
import { ArrowLeft, Download, Printer } from "lucide-react"
import Link from "next/link"

export default function SecurityDepositReceiptPage() {
  // This would typically come from an API or database
  const receiptData = {
    receiptNumber: "SD-2025-001",
    date: "March 1, 2025",
    amount: 2175.0,
    tenant: "John Doe",
    landlord: "Skyline Properties LLC",
    property: "123 Main Street, Apt 4B, San Francisco, CA 94103",
    paymentMethod: "Bank Transfer",
    leaseStartDate: "March 1, 2025",
    leaseEndDate: "February 28, 2026",
    depositType: "Refundable Security Deposit",
    notes:
      "This receipt confirms the payment of the security deposit for the above property. The security deposit is refundable at the end of the lease term, subject to the terms and conditions outlined in the lease agreement.",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 p-4 md:p-8 pt-6">
        <div className="flex items-center space-x-2 mb-4">
          <Link href="/dashboard/security-deposit">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Security Deposit
            </Button>
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2" id="receipt">
            <CardHeader className="text-center border-b">
              <div className="flex items-center justify-center gap-2 font-bold text-xl mb-2">
                <span className="text-primary">Lease</span>Vault
              </div>
              <CardTitle className="text-2xl">Security Deposit Receipt</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">Receipt #: {receiptData.receiptNumber}</h3>
                  <p className="text-sm text-muted-foreground">Date: {receiptData.date}</p>
                </div>
                <div className="text-right">
                  <h3 className="font-medium">Amount Paid</h3>
                  <p className="text-xl font-bold">${receiptData.amount.toFixed(2)}</p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-1">From</h3>
                  <p className="text-sm">{receiptData.tenant}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">To</h3>
                  <p className="text-sm">{receiptData.landlord}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">Property</h3>
                <p className="text-sm">{receiptData.property}</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Payment Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Payment Method:</div>
                  <div className="text-right">{receiptData.paymentMethod}</div>
                  <div>Deposit Type:</div>
                  <div className="text-right">{receiptData.depositType}</div>
                  <div>Lease Start Date:</div>
                  <div className="text-right">{receiptData.leaseStartDate}</div>
                  <div>Lease End Date:</div>
                  <div className="text-right">{receiptData.leaseEndDate}</div>
                </div>
              </div>

              <div className="rounded-md border p-4 bg-muted/30">
                <h3 className="font-medium mb-1">Notes</h3>
                <p className="text-sm">{receiptData.notes}</p>
              </div>

              <div className="border-t pt-4 text-center text-sm text-muted-foreground">
                <p>This receipt was automatically generated by LeaseVault.</p>
                <p>Thank you for your payment.</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 border-t">
              <Button variant="outline" size="sm">
                <Printer className="mr-2 h-4 w-4" />
                Print Receipt
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

