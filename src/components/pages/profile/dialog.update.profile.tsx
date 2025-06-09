'use client';
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import FormUpdateProfile from "@/components/pages/profile/form.update.profile";
import DialogHeaderSticky from "@/components/common/dialog.header.sticky";
import {TUserInfo} from "@/types";
import {useState} from "react";

const DialogUpdateProfile = ({infoProfile}: { infoProfile: TUserInfo }) => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <h2 className="text-sm font-bold hover:text-primary cursor-pointer md:mr-4">Update</h2>
            </DialogTrigger>
            <DialogContent className="p-0">
                <DialogHeaderSticky title="Update Profile"></DialogHeaderSticky>
                <div className="px-6 pb-6">
                    <FormUpdateProfile infoProfile={infoProfile} onClose={() => setOpen(false)}></FormUpdateProfile>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogUpdateProfile