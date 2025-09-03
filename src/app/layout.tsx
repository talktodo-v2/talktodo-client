import AlertContainer from '@/shared/components/Alert/AlertContainer';
import '../shared/styles/globals.css';

import ModalContainer from '@/shared/components/Modal/ModalContainer';
import ToastContainer from '@/shared/components/Toast/ToastContainer';
import QueryProvider from '@/shared/provider/QueryProvider';
import pretendard from '@/shared/styles/pretendard';
import { cn } from '@/shared/utils/cn';

import ConditionalLayout from './ConditionalLayout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={cn(pretendard.className, 'flex justify-center')}>
        <QueryProvider>
          <ConditionalLayout>
            <div id='toast-root' />
            <div id='modal-root' />
            <div id='alert-root' />
            <ToastContainer />
            <ModalContainer />
            <AlertContainer />
            {children}
          </ConditionalLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
