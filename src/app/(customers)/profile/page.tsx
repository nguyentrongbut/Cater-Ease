import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import UpdateProfile from "@/components/pages/profile/update.profile";
import ContainerWrapper from "@/components/common/container.wrapper";
import {getProfile} from "@/lib/actions/account";
import {redirect} from "next/navigation";

const Profile = async () => {
    const infoProfile = await getProfile();

    if (!infoProfile) {
       redirect('/login');
    }

    return (
        <>
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
                            <BreadcrumbPage>Profile</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <UpdateProfile infoProfile={infoProfile}></UpdateProfile>
            </ContainerWrapper>
        </>
    );
}

export default Profile;