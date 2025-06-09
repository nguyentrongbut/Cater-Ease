'use client';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import FormChangePassword from "@/components/pages/profile/form.change.password";
import {TUserInfo} from "@/types";
import {useState} from "react";

const DialogChangePassword = ({infoProfile}: { infoProfile: TUserInfo }) => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <h2 className="text-sm font-bold hover:text-primary cursor-pointer md:mr-4">Change password</h2>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-6">Change password</DialogTitle>
                    <FormChangePassword infoProfile={infoProfile} onClose={() => setOpen(false)}></FormChangePassword>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default DialogChangePassword