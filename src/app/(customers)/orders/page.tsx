import {getListOrderUser} from "@/lib/actions/order";
import {getAnonymousUserIdServer} from "@/utils/anonymous.user.id.server";
import {getProfile} from "@/lib/actions/account";
import DataTable from "@/components/ui/data-table";
import {columnsListOrder} from "@/components/pages/orders/columns.list.order";
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

const Orders = async () => {
    const infoProfile = await getProfile();
    const userId = infoProfile?.id || await getAnonymousUserIdServer();

    if (!userId) return null;

    const listOrder = await getListOrderUser(userId)

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
                        <BreadcrumbPage>Orders</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Heading as="h1" className="mt-8">
                Your List Order
            </Heading>
           <section className="mt-4 mb-10">
               <DataTable
                   columns={columnsListOrder}
                   data={listOrder}
               ></DataTable>
           </section>
        </ContainerWrapper>
    )
}

export default Orders