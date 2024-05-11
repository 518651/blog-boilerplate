import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Flower,
  FolderHeart,
  Forward,
  Github,
  Home,
  PencilLine,
  Shell,
  Slack,
  SquareDashedBottomCode,
  Terminal,
  TrafficCone,
  Twitter,
  UnfoldVertical,
  Video,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const navList = [
  {
    title: "主页",
    href: "/",
    prefix: <Home size={16} />,
  },
  { title: "写作", href: "/writing", prefix: <PencilLine size={16} /> },
  { title: "行程", href: "/lify", prefix: <Shell size={16} /> },
  { title: "技术栈", href: "/stack", prefix: <Slack size={16} /> },
  { title: "工作空间", href: "/workspace", prefix: <TrafficCone size={16} /> },
  { title: "书签", href: "/bookmarks", prefix: <FolderHeart size={16} /> },
  { title: "实验室", href: "/playground", prefix: <Slack size={16} /> },
];

const socialList = [
  {
    title: "GitHub",
    href: "https://github.com/518651",
    prefix: <Github size={16} />,
  },
  {
    title: "X (Twitter)",
    href: "https://twitter.com/The0yx",
    prefix: <Twitter size={16} />,
  },
  {
    title: "Bilibili",
    href: "https://space.bilibili.com/647465951?spm_id_from=333.1007.0.0",
    prefix: <Flower size={16} />,
  },
];

const openSourceList = [
  {
    title: "V2G",
    href: "https://vtog.vesper.host",
    prefix: <Video size={16} />,
  },
  {
    title: "BeautyCode",
    href: "https://marketplace.visualstudio.com/items?itemName=Vesper.beautycode",
    prefix: <SquareDashedBottomCode size={16} />,
  },
  {
    title: "Vtabs",
    href: "https://chromewebstore.google.com/detail/vtabs/ldjlkpemhoddnoedhbebgdncegooejim?hl=zh-CN&utm_source=ext_sidebar",
    prefix: <UnfoldVertical size={16} />,
  },
  {
    title: "Bup",
    href: "https://www.npmjs.com/package/buildp",
    prefix: <Terminal size={16} />,
  },
];

export default function NavContent() {
  const currentPathname = usePathname();

  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
          <Avatar>
            <AvatarImage
              src="/avatar.jpeg"
              alt="vespser"
              className="object-cover"
            />
            <AvatarFallback>vesper</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold tracking-tight">Zhuxs.</h1>
            <p className="text-gray-600">Vercel前端工程师（Doge）</p>
          </div>
        </Link>
        <nav className="flex flex-col gap-1">
          {navList.map((navItem, index) => {
            const isSelected =
              currentPathname.split("/")[1] === navItem.href.replace("/", "");
            const commonClasses =
              "group flex items-center justify-between rounded-lg p-2";
            const selectedClasses = isSelected
              ? "bg-black text-white"
              : "hover:bg-gray-200";
            const borderClasses = isSelected
              ? "border-gray-600 bg-gray-700 text-gray-200 group-hover:border-gray-600"
              : "border-gray-200 bg-gray-100 text-gray-500 group-hover:border-gray-300";
            return (
              <Link
                key={navItem.href}
                href={navItem.href}
                className={`${commonClasses} ${selectedClasses}`}
              >
                <span className="flex items-center">
                  {navItem.prefix}
                  <span className="ml-2 font-medium">{navItem.title}</span>
                </span>
                <span
                  className={`hidden h-5 w-5 place-content-center rounded border text-xs font-medium transition-colors duration-200 lg:grid ${borderClasses}`}
                >
                  {index + 1}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
      <Separator className="my-5" />
      <span className="px-2 text-xs mb-2 font-medium leading-relaxed text-gray-600">
        Online
      </span>
      <nav className="flex flex-col gap-1">
        {socialList.map((socialItem, index) => (
          <Link
            key={socialItem.href}
            href={socialItem.href}
            target="_blank"
            className="group flex items-center justify-between rounded-lg p-2"
          >
            <span className="flex items-center">
              {socialItem.prefix}
              <span className="ml-2 font-medium">{socialItem.title}</span>
            </span>
            <Forward size={16} />
          </Link>
        ))}
      </nav>
      <Separator className="my-5" />
      <span className="px-2 text-xs mb-2 font-medium leading-relaxed text-gray-600">
        开源项目
      </span>
      {/* <nav className="flex flex-col gap-1">
        {openSourceList.map((openItem, index) => (
          <Link
            key={openItem.href}
            href={openItem.href}
            target="_blank"
            className="group flex items-center justify-between rounded-lg p-2"
          >
            <span className="flex items-center">
              {openItem.prefix}
              <span className="ml-2 font-medium">{openItem.title}</span>
            </span>
            <Forward size={16} />
          </Link>
        ))}
      </nav> */}
      <span className="ml-2 font-medium">Wait Some Time</span>
    </div>
  );
}
