'use client';


import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { motion } from 'motion/react';


export const LogoutButton = () => {
    const router = useRouter();
    return (
        <motion.div
         initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='w-full flex justify-center'
        >
        <Button className='w-[300px] mx-auto font-bold' onClick={() => authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push('/login');
                    toast.success('Logged out successfully');
                },
            }
        })}>
            Logout
        </Button>
        </motion.div>
    );
};