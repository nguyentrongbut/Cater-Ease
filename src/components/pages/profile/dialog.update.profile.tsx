import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import FormUpdateProfile from "@/components/pages/profile/form.update.profile";
import DialogHeaderSticky from "@/components/common/dialog.header.sticky";
import {TUserInfo} from "@/types";

const DialogUpdateProfile = ({infoProfile}: { infoProfile: TUserInfo }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <h2 className="text-sm font-bold hover:text-primary cursor-pointer md:mr-4">Update</h2>
            </DialogTrigger>
            <DialogContent className="p-0">
                <DialogHeaderSticky title="Update Profile"></DialogHeaderSticky>
                <div className="px-6 pb-6">
                    <FormUpdateProfile infoProfile={infoProfile}></FormUpdateProfile>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogUpdateProfile