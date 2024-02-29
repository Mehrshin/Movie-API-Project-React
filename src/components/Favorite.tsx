import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { AuthType } from '../components/Auth';
import LoginPromptModal from './LoginPromptModel'; 

interface FavoriteProps {
    user: AuthType | null;
    title: string; 
    isFavorite: boolean;
    updateFavoriteStatus: (status: boolean) => void; 
}

const Favorite = ({ user, title, isFavorite, updateFavoriteStatus }: FavoriteProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const icon = isFavorite ? solidStar : regularStar;
    const color = isFavorite ? "yellow" : "gray";

    const handleAddFavorite = async () => {
        if (!user?.user?.userId) {
            setModalOpen(true);
            return;
        }
        const newFavoriteStatus = !isFavorite;
        updateFavoriteStatus(newFavoriteStatus); 

        try {
            const response = await fetch('api/favorites', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.user.userId,
                    movieId: title,
                    isFavorite: newFavoriteStatus
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to update the favorite status");
            }
            console.log(newFavoriteStatus ? "Added to Favorite" : "Removed from Favorite");
        } catch (error) {
            console.error("Something Wrong with adding Favorite", error);
            updateFavoriteStatus(!newFavoriteStatus); 
        }
    };

    return (
        <>
            <FontAwesomeIcon icon={icon} color={color} onClick={handleAddFavorite} cursor="pointer" />
            <LoginPromptModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};

export default Favorite;
