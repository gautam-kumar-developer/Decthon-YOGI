import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonInput from '../components/NeonInput';
import NeonTextarea from '../components/NeonTextarea';
import NeonButton from '../components/NeonButton';
import ImageUploader from '../components/ImageUploader';
import { Send, MapPin } from 'lucide-react';
import axios from 'axios';
const RegisterComplaint = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        complaint: '',
        location: '',
        image: null
    });

    const [complaint, setcomplaint] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Mock API call
        const payload = {
            complaint
        };
        console.log('Complaint data:', complaint);

        // console.log('Submitting complaint:', formData);
        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/process-complaint",
                payload
            );

            console.log(response.data);
            // navigate('/user/login');

            console.log("Crewai connected successfully:", response.data);

            //
            const dto = {
                description: response.data.summary,
                severity: response.data.severity,
                department: response.data.department
            };

            try {

                const response1 = await axios.post(
                    "http://localhost:8080/api/complaint/create",
                    dto
                );

                console.log("Data Send to backend successfully:", response1.data);

            } catch (error) {
                console.error("Registration failed:", error);
            } finally {
                setLoading(false);
            }

        } catch (error) {
            console.error("Registration failed:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <MapPin className="text-neon-cyan" />
                Report an Issue
            </h1>

            <GlassCard className="border-neon-cyan/20">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <NeonTextarea
                        label="Describe the Issue"
                        placeholder="Please provide detailed information about the problem..."
                        value={complaint}
                        onChange={(e) => setcomplaint(e.target.value)}
                        required
                        className="min-h-[150px]"
                    />

                    <NeonInput
                        label="Location"
                        placeholder="e.g. 5th Avenue, Near Central Park"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}

                    />

                    <ImageUploader
                        onImageSelect={(file) => setFormData({ ...formData, image: file })}
                    />

                    <div className="pt-4">
                        <NeonButton variant="cyan" type="submit" isLoading={loading} className="w-full">
                            Submit Complaint <Send className="w-4 h-4 ml-2" />
                        </NeonButton>
                    </div>
                </form>
            </GlassCard>
        </div>
    );
};

export default RegisterComplaint;
