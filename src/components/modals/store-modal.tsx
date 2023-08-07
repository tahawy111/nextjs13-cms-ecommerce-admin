"use client"
import {} from 'react';
import Modal from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

interface storeModalProps {
  
}

export default function StoreModal({ }: storeModalProps) {
    const {isOpen,onClose,onOpen} = useStoreModal()
    return (
        <Modal title="Create Store" description='Add a new store to manage products and categories' isOpen={isOpen} onClose={onClose}>
            Future Create Store Form
        </Modal>
    )
}
