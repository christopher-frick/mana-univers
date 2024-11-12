import React from 'react'
import ComingSoon from '../CountDown/Countdown'
import CountDown from '../CountDown/Countdown'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ButtonLink from '../ButtonLink/ButtonLink';
function ComingSoonVersion1() {
    //date 30 November 2024 at 20:00
    const specificEndDate = new Date('2024-11-30 20:00:00');

  return (
    <>
        <section className="flex min-h-screen flex-col w-full items-center justify-between p-5 lg:p-12">
            <Header />
            <ButtonLink />
            <CountDown endDate={specificEndDate} />
            <Footer />
        </section>
    </>
  )
}

export default ComingSoonVersion1