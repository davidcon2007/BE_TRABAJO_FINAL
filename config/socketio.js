import { Products } from "../entity/products.entity.js";


export const setupSocket = (socketio) => {
    socketio.on("connection", (socketLocal) => {
        console.log("socket connected");

        socketLocal.on("decrease-stock", async (payload) => {
            let product = await Products.findOne({
                where: {
                    id: payload.productId,
                },
            });

            if (!product.stock) {
                console.log("No hay stock para el id: " + payload.productId);
            } else {
                await Products.update(
                    {
                        stock: product.stock - 1,
                    },
                    {
                        where: {
                            id: payload.productId,
                        },
                    }
                );

                product = await Products.findOne({
                    where: {
                        id: payload.productId,
                    },
                });

                socketio.emit("stock-updated", product);
            }
        });
        socketLocal.on("increase-stock", async (payload) => {
            let product = await Products.findOne({
                where: {
                    id: payload.productId,
                },
            });

            if (!product.stock) {
                console.log("No hay stock para el id: " + payload.productId);
            } else {
                await Products.update(
                    {
                        stock: product.stock + 1,
                    },
                    {
                        where: {
                            id: payload.productId,
                        },
                    }
                );

                product = await Products.findOne({
                    where: {
                        id: payload.productId,
                    },
                });

                socketio.emit("stock-updated", product);
            }
        });
    });
};
