import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ClerkProvider} from '@clerk/nextjs'
import Chat from '@/components/chat'
import { ToastProvider } from '@/providers/toast-provider'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LingoSafari',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <ToastProvider/>
        <Chat/>
        <Header/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
