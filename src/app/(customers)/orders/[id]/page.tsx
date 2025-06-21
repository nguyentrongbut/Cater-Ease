import {getOrderDetail} from "@/lib/actions/order";
import ContainerWrapper from "@/components/common/container.wrapper";
import Heading from "@/components/typography/Heading";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import DataTable from "@/components/ui/data-table";
import {columnsOrderDetail} from "@/components/pages/orders/detail/columns.order.detail";
import OrderSummaryCart from "@/components/pages/cart/order.summary.cart";

type Params = Promise<{ id: string }>

const OrderDetail = async ({params}: { params: Params }) => {
    const {id} = await params

    const orderDetail = await getOrderDetail(id)

    return (
        <ContainerWrapper className="py-8">
            <Breadcrumb className="mb-6">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <span>/</span>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/orders">Orders</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <span>/</span>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Order Detail</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-8 flex gap-10 items-center mb-3">
                <Heading as="h1">
                    Order Detail {id}
                </Heading>
                <Badge>
                    {orderDetail.status}
                </Badge>
            </div>

            <DataTable
                columns={columnsOrderDetail}
                data={orderDetail.items}
            ></DataTable>
            <div className="flex justify-end mt-8">
                <OrderSummaryCart
                    detail={orderDetail?.status === "confirm"}
                    totalPrice={orderDetail.total}
                    numTable={orderDetail.tableNumber}
                ></OrderSummaryCart>
            </div>
        </ContainerWrapper>
    )
}

export default OrderDetail;