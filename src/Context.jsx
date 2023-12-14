import { createContext, useContext, useEffect, useState } from "react"
import { db, storage } from "./firebase/firebase"
import { set, ref, onValue, get, update, push, getDatabase } from "firebase/database"
import { ref as refImg, uploadBytes, getDownloadURL } from 'firebase/storage'



const Context = createContext()

export const useContextRDT = () => {
    const context = useContext(Context)
    if (!context) throw new Error('There is no Auth provider')
    return context
}

export function ProviderContext({ children }) {
    const [InforHero1, setInforHero1] = useState({
        title: '',
        description: '',
        image: null
    });
    const [InforHero2, setInforHero2] = useState({
        title: '',
        description: '',
        image: null
    })
    const [imgUrl, setImgUrl] = useState(null)
    const [features, setFeatures] = useState([]);

    //Funcion para guardar los datos, No actualizar
    const SaveHero1 = async (title, descripcion) => {
        console.log("Backend")
        let id = 0
        id++
        try {

            set(ref(db, 'Hero1/'), {
                Title: title,
                Descripcion: descripcion,
                Image: ""
            })

            console.log("Save Data")

        } catch (error) {

            console.log("Error save data")
            console.log(error)
        }
    }

    const login = async (email, password) => {
        console.log("Backend");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('D', "email");
            //   console.log("Inicio de sesión exitoso:", user);

            return true;
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
            return false;
        }
    };
    const SavePartners = async (id, title, descripcion, image) => {
        try {


            const partnerRef = ref(db, `Partners/${id}`);

            try {
                const partnerSnapshot = await get(partnerRef);

                if (partnerSnapshot.exists()) {
                    // El elemento existe, actualiza sus datos
                    await update(partnerRef, {
                        Title: title,
                        Descripcion: descripcion,
                        Image: image
                    });

                    console.log("Update Data");
                } else {
                    // El elemento no existe, créalo
                    await set(partnerRef, {
                        id,
                        Title: title,
                        Descripcion: descripcion,
                        Image: image
                    });

                    console.log("Save Data");
                }
            } catch (error) {
                console.error("Error:", error);
            }


        } catch (error) {

            console.log("Error save data")
            console.log(error)
        }
    }

    const SaveCTA = async (id, title) => {
        try {


            const partnerRef = ref(db, `CTA/${id}`);

            try {
                const partnerSnapshot = await get(partnerRef);

                if (partnerSnapshot.exists()) {
                    // El elemento existe, actualiza sus datos
                    await update(partnerRef, {
                        Title: title,
                    });

                    console.log("Update Data");
                } else {
                    // El elemento no existe, créalo
                    await set(partnerRef, {
                        id,
                        Title: title,
                    });

                    console.log("Save Data");
                }
            } catch (error) {
                console.error("Error:", error);
            }


        } catch (error) {

            console.log("Error save data")
            console.log(error)
        }
    }

    const SaveTestimonials = async (id, title, image) => {
        try {


            const partnerRef = ref(db, `Testimonials/${id}`);

            try {
                const partnerSnapshot = await get(partnerRef);

                if (partnerSnapshot.exists()) {
                    // El elemento existe, actualiza sus datos
                    await update(partnerRef, {
                        Title: title,
                        Image: image
                    });

                    console.log("Update Data");
                } else {
                    // El elemento no existe, créalo
                    await set(partnerRef, {
                        id,
                        Title: title,
                        Image: image
                    });

                    console.log("Save Data");
                }
            } catch (error) {
                console.error("Error:", error);
            }


        } catch (error) {

            console.log("Error save data")
            console.log(error)
        }
    }
    const GetAllTestimonials = async () => {
        const partnersRef = ref(getDatabase(), 'Testimonials');

        try {
            const partnersSnapshot = await get(partnersRef);

            if (partnersSnapshot.exists()) {
                // Obtén todos los datos de Partners
                const partnersData = partnersSnapshot.val();
                return partnersData;
            } else {
                console.log("No data available");
                return null;
            }
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };
    const GetAllPartners = async () => {
        const partnersRef = ref(getDatabase(), 'Partners');

        try {
            const partnersSnapshot = await get(partnersRef);

            if (partnersSnapshot.exists()) {
                // Obtén todos los datos de Partners
                const partnersData = partnersSnapshot.val();
                return partnersData;
            } else {
                console.log("No data available");
                return null;
            }
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };
    const GetAllCTA = async () => {
        const partnersRef = ref(getDatabase(), 'CTA');

        try {
            const partnersSnapshot = await get(partnersRef);

            if (partnersSnapshot.exists()) {
                // Obtén todos los datos de Partners
                const partnersData = partnersSnapshot.val();
                return partnersData;
            } else {
                console.log("No data available");
                return null;
            }
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };



    const EditarHero1Title = async (newTitle) => {
        try {
            const heroRef = ref(db, 'Hero1');
            console.log("Editar title")
            console.log(newTitle)
            update(heroRef, {
                Title: newTitle
            });

            console.log('Títulos actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar títulos:', error);
        }
    }

    const DeleteHero1Title = async () => {
        try {
            const heroRef = ref(db, 'Hero1');
            update(heroRef, {
                Title: ""
            })
        } catch (error) {
            console.error(error);
        }
    }

    const EditarHero1Description = async (newDescription) => {
        try {
            const heroRef = ref(db, 'Hero1');
            console.log("Editar Description")
            console.log(newDescription)
            update(heroRef, {
                Descripcion: newDescription
            });

            console.log('Títulos actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar títulos:', error);
        }
    }

    const DeleteHero1Description = async () => {
        try {
            const heroRef = ref(db, 'Hero1');
            update(heroRef, {
                Descripcion: ""
            });


        } catch (error) {
            console.error(error);
        }
    }

    const UploadFile = async (fileImg) => {
        try {

            const storageRef = refImg(storage, 'HeroImg/' + fileImg.name);
            await uploadBytes(storageRef, fileImg);
            const url = await getDownloadURL(storageRef)

            const heroRef = ref(db, 'Hero1');
            update(heroRef, {
                Image: url
            });

        } catch (error) {
            console.error('Error al cargar el archivo:', error);
        }
    };

    const deleteImg = async () => {
        try {
            const heroRef = ref(db, 'Hero1');
            const snapshot = await get(heroRef);
            const data = snapshot.val();
            const imageUrl = data?.Image;

            if (imageUrl) {

                await update(heroRef, {
                    Image: null
                });

            } else {
                console.log('No se encontró ninguna URL de imagen en la base de datos');
            }
        } catch (error) {
            console.error('Error al eliminar la referencia de la imagen:', error);
            throw error;
        }
    }

    const SaveFeature = async (title, descripcion) => {

        try {

            const featureRef = ref(db, 'Features');
            const newFeatureRef = push(featureRef); // Generar una nueva referencia con un ID único
            const id = newFeatureRef.key;

            set(newFeatureRef, {
                Id: id,
                Title: title,
                Descripcion: descripcion,
            })

            console.log("Save Data")

        } catch (error) {

            console.log("Error save data")
            console.log(error)
        }
    }

    const EditFeatureTitle = async (id, newData) => {

        try {
            const featureRef = ref(db, `Features/${id}`);

            await update(featureRef, {
                Title: newData,
            });

            console.log("Campo Title actualizado correctamente");
        } catch (error) {
            console.error("Error al actualizar el feature:", error);
        }
    }

    const EditFeatureDescription = async (id, newData) => {

        try {
            const featureRef = ref(db, `Features/${id}`);

            await update(featureRef, {
                Descripcion: newData,
            });

            console.log("Campo Description actualizado correctamente");
        } catch (error) {
            console.error("Error al actualizar el feature:", error);
        }
    };
    const DeleteFeatureTitle = async (id) => {
        try {
            const featureRef = ref(db, `Features/${id}`);
            update(featureRef, {
                Title: ""
            })
        } catch (error) {
            console.error(error);
        }
    }

    const DeleteFeatureDescription = async (id) => {
        try {
            const featureRef = ref(db, `Features/${id}`);
            update(featureRef, {
                Descripcion: ""
            })
        } catch (error) {
            console.error(error);
        }
    }

    const UploadFileFeature = async (id, fileImg) => {
        try {

            const storageRef = refImg(storage, 'FeatureImg/' + fileImg.name);
            await uploadBytes(storageRef, fileImg);
            const url = await getDownloadURL(storageRef)

            const heroRef = ref(db, `Features/${id}`);
            update(heroRef, {
                Image: url
            });

        } catch (error) {
            console.error('Error al cargar el archivo:', error);
        }
    }

    const deleteIconFeature = async (id) => {
        try {
            const heroRef = ref(db, `Features/${id}`);
            const snapshot = await get(heroRef);
            const data = snapshot.val();
            const imageUrl = data?.Image;

            if (imageUrl) {

                await update(heroRef, {
                    Image: null
                });

            } else {
                console.log('No se encontró ninguna URL de imagen en la base de datos');
            }
        } catch (error) {
            console.error('Error al eliminar la referencia de la imagen:', error);
            throw error;
        }
    }

    const ShowFeatures = async () => {
        const featuresRef = ref(db, 'Features');
        onValue(featuresRef, (snapshot) => {
            if (snapshot.exists()) {
                setFeatures(Object.values(snapshot.val()));
            } else {
                setFeatures([]);
            }
        });
    }
    //HERO 2 FUNCTIONS
    const SaveHero2 = async (title, descripcion) => {

        try {

            set(ref(db, 'Hero2/'), {
                Title: title,
                Descripcion: descripcion,
                Image: ""
            })

            console.log("Save Data")

        } catch (error) {

            console.log("Error save data")
            console.log(error)
        }
    }

    const EditarHero2Title = async (newTitle) => {
        try {
            const heroRef = ref(db, 'Hero2');
            update(heroRef, {
                Title: newTitle
            });

            console.log('Títulos actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar títulos:', error);
        }
    }

    const DeleteHero2Title = async () => {
        try {
            const heroRef = ref(db, 'Hero2');
            update(heroRef, {
                Title: ""
            })
        } catch (error) {
            console.error(error);
        }
    }

    const EditarHero2Description = async (newDescription) => {
        try {
            const heroRef = ref(db, 'Hero2');
            console.log("Editar Description")
            console.log(newDescription)
            update(heroRef, {
                Descripcion: newDescription
            });

            console.log('Títulos actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar títulos:', error);
        }
    }

    const DeleteHero2Description = async () => {
        try {
            const heroRef = ref(db, 'Hero2');
            update(heroRef, {
                Descripcion: ""
            });


        } catch (error) {
            console.error(error);
        }
    }

    const UploadFileHero2 = async (fileImg) => {
        try {

            const storageRef = refImg(storage, 'Hero2Img/' + fileImg.name);
            await uploadBytes(storageRef, fileImg);
            const url = await getDownloadURL(storageRef)

            const heroRef = ref(db, 'Hero2');
            update(heroRef, {
                Image: url
            });

        } catch (error) {
            console.error('Error al cargar el archivo:', error);
        }
    };

    const deleteImgHero2 = async () => {
        try {
            const heroRef = ref(db, 'Hero2');
            const snapshot = await get(heroRef);
            const data = snapshot.val();
            const imageUrl = data?.Image;

            if (imageUrl) {

                await update(heroRef, {
                    Image: null
                });

            } else {
                console.log('No se encontró ninguna URL de imagen en la base de datos');
            }
        } catch (error) {
            console.error('Error al eliminar la referencia de la imagen:', error);
            throw error;
        }
    }




    const ShowInfoHero1 = async () => {
        try {
            const fetchData = ref(db, 'Hero1/')

            onValue(fetchData, (snapshot) => {
                const data = snapshot.val()
                setInforHero1(prevText => ({ ...prevText, title: data.Title, description: data.Descripcion, image: data.Image }));
            })
        } catch (error) {

        }
    }

    const ShowInfoHero2 = async () => {
        try {
            const fetchData = ref(db, 'Hero2/')

            onValue(fetchData, (snapshot) => {
                const data = snapshot.val()
                setInforHero2(prevText => ({ ...prevText, title: data.Title, description: data.Descripcion, image: data.Image }))
            })
        } catch (error) {

        }
    }

    useEffect(() => {
        console.log("Context")
        ShowInfoHero1()
        ShowInfoHero2()
        ShowFeatures()
    }, [])



    console.log(InforHero1)
    console.log(InforHero2)


    return (
        <Context.Provider
            value={{
                SaveHero1,
                InforHero1,
                EditarHero1Title,
                EditarHero1Description,
                UploadFile,
                imgUrl,
                deleteImg,
                DeleteHero1Title,
                DeleteHero1Description,
                features,
                ShowFeatures,
                SaveFeature,
                EditFeatureTitle,
                EditFeatureDescription,
                DeleteFeatureTitle,
                DeleteFeatureDescription,
                UploadFileFeature,
                deleteIconFeature,
                InforHero2,
                SaveHero2,
                EditarHero2Title,
                DeleteHero2Title,
                EditarHero2Description,
                DeleteHero2Description,
                UploadFileHero2,
                deleteImgHero2,
                SaveCTA,
                GetAllCTA,
                SavePartners,
                GetAllPartners,
                SaveCTA,
                GetAllCTA,
                SaveTestimonials,
                GetAllTestimonials

            }}
        >
            {children}
        </Context.Provider>
    )
}