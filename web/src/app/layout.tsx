import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'

import FilterContextProvider from '@/contexts/filter-context'
import Header from '@/components/header'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Projeto de teste avaliação da RocketSeat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <FilterContextProvider>
        <body className={saira.className}>
          <Header />
          {children}
        </body>
      </FilterContextProvider>
    </html>
  )
}
