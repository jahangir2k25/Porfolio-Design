import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Heart, ShoppingCart, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Tailwind-only, no external CSS needed.
// Drop this component into a Vite + React + Tailwind project and render <ShopPage />.
// Replace the placeholder data/images with your own.

const sampleProducts = [
    {
        id: 1,
        title: "Minimal Running Shoe",
        price: 89.0,
        rating: 4.7,
        reviews: 128,
        image: "https://picsum.photos/id/237/600/600",
        badge: "New",
    },
    {
        id: 2,
        title: "Everyday Backpack",
        price: 59.0,
        rating: 4.5,
        reviews: 92,
        image: "https://picsum.photos/id/1062/600/600",
        badge: "-20%",
    },
    {
        id: 3,
        title: "Wireless Headphones",
        price: 129.0,
        rating: 4.8,
        reviews: 341,
        image: "https://picsum.photos/id/0/600/600",
    },
    {
        id: 4,
        title: "Soft Cotton Tee",
        price: 19.0,
        rating: 4.2,
        reviews: 51,
        image: "https://picsum.photos/id/100/600/600",
    },
    {
        id: 5,
        title: "Ergo Office Chair",
        price: 219.0,
        rating: 4.6,
        reviews: 77,
        image: "https://picsum.photos/id/29/600/600",
    },
    {
        id: 6,
        title: "Stainless Water Bottle",
        price: 24.0,
        rating: 4.4,
        reviews: 63,
        image: "https://picsum.photos/id/433/600/600",
    },
];

function Navbar({ onSearch }) {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-black" />
                    <span className="text-lg font-semibold tracking-wide">Shop<span className="text-black/50">UI</span></span>
                </div>

                <div className="relative hidden w-full max-w-lg items-center md:flex">
                    <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" />
                    <input
                        onChange={(e) => onSearch?.(e.target.value)}
                        placeholder="Search products…"
                        className="w-full rounded-2xl border px-10 py-2 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <button className="rounded-2xl border px-3 py-2 transition hover:bg-black hover:text-white"><Heart className="h-5 w-5" /></button>
                    <button className="rounded-2xl border px-3 py-2 transition hover:bg-black hover:text-white relative">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black px-1 text-xs text-white">3</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

function Rating({ value }) {
    const stars = Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < Math.round(value) ? "fill-black" : "fill-transparent"} stroke-black`} />
    ));
    return <div className="flex items-center gap-1">{stars}</div>;
}

function ProductCard({ product, onAdd }) {
    const [qty, setQty] = useState(1);
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
        >
            {product.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-black px-2 py-1 text-xs text-white shadow-sm">{product.badge}</span>
            )}

            <div className="relative aspect-square overflow-hidden">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>

            <div className="space-y-2 p-4">
                <h3 className="line-clamp-1 text-sm font-medium text-gray-900">{product.title}</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Rating value={product.rating} />
                        <span>({product.reviews})</span>
                    </div>
                </div>

                <div className="mt-2 flex items-center gap-2">
                    <div className="inline-flex items-center rounded-full border">
                        <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2">-</button>
                        <span className="min-w-[2ch] text-center text-sm">{qty}</span>
                        <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2">+</button>
                    </div>
                    <button
                        onClick={() => onAdd?.(product, qty)}
                        className="flex-1 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:translate-y-[-1px] hover:shadow"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

function Pagination({ page, totalPages, onPage }) {
    return (
        <div className="mt-6 flex items-center justify-center gap-2">
            <button
                onClick={() => onPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="inline-flex items-center gap-1 rounded-xl border px-3 py-2 disabled:opacity-40"
            >
                <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onPage(i + 1)}
                    className={`size-9 rounded-xl border text-sm ${page === i + 1 ? "bg-black text-white" : "bg-white"}`}
                >
                    {i + 1}
                </button>
            ))}
            <button
                onClick={() => onPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="inline-flex items-center gap-1 rounded-xl border px-3 py-2 disabled:opacity-40"
            >
                Next <ChevronRight className="h-4 w-4" />
            </button>
        </div>
    );
}

export default function ShopPage() {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const perPage = 6;

    const products = useMemo(() => {
        const q = query.trim().toLowerCase();
        return sampleProducts.filter((p) => p.title.toLowerCase().includes(q));
    }, [query]);

    const totalPages = Math.max(1, Math.ceil(products.length / perPage));
    const pageItems = products.slice((page - 1) * perPage, page * perPage);

    function handleAdd(product, qty) {
        // Integrate with your Redux reducer here if you want.
        // For now we just log.
        console.log("ADD_TO_CART", { product, qty });
        alert(`Added ${qty} × ${product.title}`);
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <Navbar onSearch={setQuery} />

            {/* Hero / Filters row (optional) */}
            <section className="mx-auto max-w-7xl px-4 pb-4 pt-6">
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Discover Products</h1>
                        <p className="text-sm text-gray-600">Clean Tailwind + React UI starter you can wire to your data.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button className="rounded-xl border px-4 py-2 text-sm">All</button>
                        <button className="rounded-xl border px-4 py-2 text-sm">Popular</button>
                        <button className="rounded-xl border px-4 py-2 text-sm">New</button>
                        <button className="rounded-xl border px-4 py-2 text-sm">Sale</button>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="mx-auto max-w-7xl px-4 pb-10">
                {pageItems.length === 0 ? (
                    <div className="rounded-2xl border bg-white p-10 text-center text-gray-600">No products found.</div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {pageItems.map((p) => (
                            <ProductCard key={p.id} product={p} onAdd={handleAdd} />)
                        )}
                    </div>
                )}

                <Pagination page={page} totalPages={totalPages} onPage={setPage} />
            </section>

            <footer className="border-t py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} ShopUI. All rights reserved.</footer>
        </main>
    );
}
