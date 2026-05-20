/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

type ITEM = { 
    title: string,
    description: string,
}

const _roadmaps: ITEM[][] = [
    [
        { 
            title: 'Fair Launch',
            description: ''
        }, 
        {
            title: 'DEX Listing',
            description: ''
        }, 
        {
            title: 'Landing Page & Tokenomics',
            description: 'New landing page with roadmap, Soonak economics, how to buy, and team section'
        },
        {
            title: 'YouTube & Social Marketing',
            description: 'Video updates, TikTok memes, and Twitter community building'
        }
    ],
    [
        {
            title: 'Kia Stammer Airdrop',
            description: 'Airdrop of newly created Kia Stammer tokens to SOONAK holders — snapshot date to be announced'
        },
        {
            title: 'Centralised Exchange Listing',
            description: 'SOONAK will be added to centralised exchanges — watch this space!'
        },
        {
            title: 'SoonMemes — Meme Launcher',
            description: 'Launch your own meme coins on Solana with the SoonMemes platform'
        },
    ],
    [
        {
            title: 'MEME Wars',
            description: 'A meme battle platform where the community creates, competes, and votes on the best memes — powered by RAID BOSS MEDIA'
        },
        {
            title: 'SOONAK Pad',
            description: 'IDO launchpad on Solana for new projects to raise and launch with SOONAK community backing'
        },
        {
            title: 'SOONAK DAO',
            description: 'Community-managed treasury giving holders governance over ecosystem decisions and funding'
        },
    ],
    [
        {
            title: 'SOONAK Vest',
            description: 'Secure vesting contracts unlockable by time, DAO votes, or project market cap milestones'
        },
        {
            title: 'SOONAK Pledge',
            description: 'Escrow-style payments held in smart contracts, released on-chain when conditions are met'
        },
        {
            title: 'SOONAK NFTs',
            description: 'PFP NFT collection launching at 5K holders, designed by RAID BOSS MEDIA'
        },
        {
            title: 'SOONAK Shares',
            description: 'Revenue-sharing claim pool based on snapshot — holders earn a share of fees from all SOONAK ecosystem products'
        },
    ],
]

const Roadmap = () => {

    const _renderItem = (_items: ITEM[], index: number) => (
        <div key={'item' + index} className={`flex ${index % 2 === 0 && 'md:!flex-row-reverse'} flex-row-reverse md:flex-row justify-center gap-2 text-white md:-mt-20`}>
            <div className='w1300:w-[35%] lg:w-[45%] md:w-1/2 w-full  rounded-3xl p-[1px] bg-gradient-to-br from-[#bfb2d4] via-[#241e49] to-[#16122F] my-2 md:my-0'>
                <div className='w-full h-full p-10 rounded-3xl dark:bg-[#0A0918] bg-[#433b79] gap-y-12'>
                    <h2 className="md:text-xl lg:text-2xl">Phase {index}</h2>
                    {
                        _items.map((_item: ITEM) => (
                            <div key={index + '_' + _item.title} className="lg:text-lg md:text-sm mt-5">
                                <h3>- {_item.title}</h3>
                                {_item.description}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`flex items-center px-8 justify-center relative flex-none md:py-10`}>
                <div className="bg-white h-full w-[1px] translate-x-1/2 z-0"></div>
                <div className="absolute w-[60px] h-[60px] flex-none z-10 rounded-full p-1 dark:bg-[#120F20] bg-[#AF77D9]">
                    {
                        index % 2 !== 0 ?
                        <Image
                            src='/logo-left.png'
                            alt='asdf'
                            sizes='100vw'
                            height={50}
                            width={50}
                            className='rounded-full'
                        />:
                        <Image
                            src='/logo.png'
                            alt='asdf'
                            sizes='100vw'
                            height={50}
                            width={50}
                            className='rounded-full'
                        />
                    }
                </div>
            </div>
            <div className='w1300:w-[35%] lg:w-[45%] md:w-1/2 w-full md:block hidden'></div>
        </div>
    )


    return (
        <section
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            id="roadmap"
            className="mt-32 mx-2 md:mx-20"
        >
            <div className="">
                <div className="title md:pb-20">
                    <h2 className="md:text-6xl text-3xl text-center text-white">Our Roadmap</h2>
                </div>
                {
                    _roadmaps.map((_item: ITEM[], index: number) => _renderItem (_item, index + 1))
                }
            </div>
        </section>
    );
};

export default Roadmap;
